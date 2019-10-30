import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    width: '60%',
    height: '70%',
    bottom: '5%',
    left: '5%',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 0.3,
    borderTopWidth: 0,
  },
  tab: {
    height: 50,
    top: '8%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default styles;
