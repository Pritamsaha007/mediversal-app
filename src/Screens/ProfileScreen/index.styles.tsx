import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F8F8F8',
    gap: 5,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e8f4f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    marginHorizontal: 5,

    borderRadius: 12,
    padding: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#0088B1',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E5E7EB',
  },
  profileName: {
    fontSize: 20,
    fontFamily: Fonts.JakartaSemiBold,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  joinedDate: {
    fontSize: 14,

    fontFamily: Fonts.JakartaSemiBold,
    color: '#6B7280',
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: Fonts.JakartaSemiBold,
    fontWeight: '600',
    color: '#1F2937',
  },
  EditTitle: {
    fontSize: 12,
    fontFamily: Fonts.JakartaSemiBold,
    fontWeight: '600',
    color: '#0088B1',
  },

  CancelTitle: {
    fontSize: 12,
    fontFamily: Fonts.JakartaSemiBold,
    fontWeight: '600',
    color: '#EB5757',
  },

  editButton: {
    flexDirection: 'row',
    gap: 5,
  },
  infoHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  AddressinfoItem: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 10,
  },
  infoItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 10,
    fontFamily: Fonts.JakartaSemiBold,
    color: '#899193',
    marginLeft: 12,
  },
  infoValue: {
    fontSize: 10,
    fontFamily: Fonts.JakartaSemiBold,
    color: '#6B7280',
    textAlign: 'right',
    flex: 1,
    marginLeft: 20,
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 10,
  },

  logoutLabel: {
    fontSize: 10,
    fontFamily: Fonts.JakartaSemiBold,
    color: '#FF4444',
    marginLeft: 12,
    fontWeight: '500',
  },
  DeleteUserLabel: {
    fontSize: 10,
    fontFamily: Fonts.JakartaSemiBold,
    color: '#000',
    marginLeft: 12,
    fontWeight: '500',
  },
  editPhotoOverlay: {
    backgroundColor: 'rgba(0, 136, 177, 0.7)',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  editPhotoText: {
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.JakartaSemiBold,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  loadingAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  fallbackAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fallbackText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: Fonts.JakartaRegular,
  },
});
export default styles;
