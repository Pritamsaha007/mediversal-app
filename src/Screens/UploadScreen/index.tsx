import React, {useState} from 'react';
import {
  View,
  Text as RNText,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MedicineDetail from '../../components/cards/MedicineDetails';
import GuaranteeCards from '../../components/cards/GuaranteeCards';
import ProductInfo from '../../components/cards/ProductInformation/ProductInfo';
import CheaperAlternative from '../../components/cards/CheaperAlternative';
import {Clock, Search, ChevronLeft} from 'lucide-react-native';
import {styles} from './index.style';
import ProductCard from '../../components/cards/ProductCard';

import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';
import {addToCart} from '../../Services/cart';
import {useAuthStore} from '../../store/authStore';
import {Product} from '../../types';
import {useCartStore} from '../../store/cartStore';
import useProductStore from '../../store/productsStore';
import {useToastStore} from '../../store/toastStore';
import CartIconWithBadge from '../../components/ui/CartIconWithBadge';

type UploadScreenRouteProp = RouteProp<RootStackParamList, 'UploadScreen'>;

const UploadScreen = ({route}: {route: UploadScreenRouteProp}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {product} = route.params;
  const {cardProducts} = useProductStore();
  const customer_id = useAuthStore(state => state.customer_id);
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const {setUserCart} = useCartStore.getState();
  // const [loading, setLoading] = useState<boolean>(false);
  // const [relatedProductsLoading, setRelatedProductsLoading] =
  //   useState<boolean>(false); // For related products
  const showToast = useToastStore(state => state.showToast);
  const handleAddToCart = async () => {
    try {
      setAddingToCart(product?.productId?.toString() ?? null);

      const currentQuantity = useCartStore
        .getState()
        .getProductQuantity(
          customer_id?.toString() ?? '',
          product?.productId ?? 0,
        );
      const newQuantity = currentQuantity + 1;

      const productData = {
        ...product,
        quantity: newQuantity,
      };

      const cartResponse = await addToCart(customer_id, productData as Product);
      if (cartResponse.success && cartResponse.cart) {
        setUserCart(customer_id?.toString() ?? '', cartResponse.cart);
      }

      useCartStore
        .getState()
        .setProductQuantity(
          customer_id?.toString() ?? '',
          product?.productId ?? 0,
          newQuantity,
        );

      showToast(
        `${product?.ProductName || 'Product'} added to cart!`,
        'success',
        1000,
        true,
      );
    } catch (error) {
      console.error('Error adding product to cart:', error);
      showToast('Failed to add product to cart', 'error');
    } finally {
      setAddingToCart(null);
    }
  };

  const handleProductPress = (item: any) => {
    console.log('Product pressed:', item);
  };

  // const renderCheaperAlternativeShimmer = () => <ProductCardShimmer />;

  // const renderRelatedProductShimmer = () => <ProductCardShimmer />;

  const cheaperAlternativeItems = cardProducts;

  const relatedProductItems = cardProducts;

  const renderCheaperAlternativeProduct = ({item}: {item: any}) => {
    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <ProductCard
          product={item}
          onAddToCart={item.onAddToCart}
          borderColor={'#2D9CDB'}
          buttonColor={'#2D9CDB'}
        />
      </TouchableOpacity>
    );
  };

  // Render related product
  const renderRelatedProduct = ({item}: {item: any}) => {
    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <ProductCard
          product={item}
          onAddToCart={item.onAddToCart}
          borderColor={'#2D9CDB'}
          buttonColor={'#2D9CDB'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.safeHeader}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <ChevronLeft size={20} color="#0088B1" />
          </TouchableOpacity>
          <View style={styles.headerRightIcons}>
            <TouchableOpacity style={styles.iconSpacing}>
              <Search size={20} color="#161D1F" />
            </TouchableOpacity>
            <CartIconWithBadge />
          </View>
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <MedicineDetail
              images={product?.images ?? []}
              productId={product?.productId}
              rating={4.5}
              name={product?.ProductName}
              packInfo={`Strip of 10 ${product?.quantity} Tablets`}
              saltComposition={product?.Composition}
              currentPrice={`₹ ${product?.SellingPrice}`}
              originalPrice={product?.CostPrice}
              discount={product?.DiscountedPercentage + '% Off'}
              deliveryTime="Get by 9pm, Tomorrow"
              onAddToCart={handleAddToCart}
              isAddingToCart={!!addingToCart}
            />

            <View style={styles.cheaperAlternativeContainer}>
              <CheaperAlternative discountPercentage={5}>
                <View style={styles.productCardsContainer}>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.productCardsContainer}>
                    {cheaperAlternativeItems.map(item => (
                      <View key={item.id} style={styles.productCard}>
                        {renderCheaperAlternativeProduct({item})}
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </CheaperAlternative>
            </View>

            {/* Guarantee cards positioned immediately below medicine details */}
            <View style={styles.guaranteeSection}>
              <GuaranteeCards />
            </View>

            <ProductInfo product={product} />

            {/* Related Products Section */}
            <RNText style={styles.relatedProductsHeading}>
              Related Products
            </RNText>
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.productCardsContainer}>
                {relatedProductItems.map(item => (
                  <View key={item.id} style={styles.productCard}>
                    {renderRelatedProduct({item})}
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        {/* Fixed bottom buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.reminderButton}>
            <Clock size={18} color="#0088B1" />
            <RNText style={styles.reminderButtonText}>Set Reminder</RNText>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.buyButton}>
            <RNText style={styles.buyButtonText}>Buy Now</RNText>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default UploadScreen;
