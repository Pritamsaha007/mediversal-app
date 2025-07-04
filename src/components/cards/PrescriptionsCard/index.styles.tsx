import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconWrapper: {
    padding: 6,
    borderRadius: 8,
  },
  orderId: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
    fontFamily: Fonts.JakartaRegular,
  },
  name: {
    fontSize: 10,
    fontWeight: '600',
    color: '#0088B1',
    fontFamily: Fonts.JakartaSemiBold,
  },
  rightContent: {
    flexDirection: 'column',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#111827',
    marginRight: 6,
    textAlign: 'center',
  },
  statusBox: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 8,
    fontFamily: Fonts.JakartaRegular,
  },
});
export default styles;
