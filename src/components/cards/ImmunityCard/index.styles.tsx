import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

const styles = StyleSheet.create({
  card: {
    width: 126,
    height: 230,
    borderRadius: 12,
    padding: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  textContainer: {
    marginTop: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.JakartaBold,
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 17,
    paddingRight: Platform.OS === 'ios' ? 15 : 0,
  },
  subtitle: {
    fontSize: 8,
    color: '#FFFFFF',
    fontFamily: Fonts.JakartaRegular,
    textAlign: 'left',
    paddingRight: Platform.OS === 'ios' ? 15 : 0,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 30,
    marginRight: Platform.OS === 'ios' ? 16 : 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 16,
    zIndex: 2,
  },

  buttonText: {
    fontSize: 8,
    color: '#40C4FF',
    fontWeight: '600',
  },
  svgContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 1,
  },
  svgAbsolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
export default styles;
