import {createDrawerNavigator} from '@react-navigation/drawer';
import SCREEN_NAME from '../constants/screen';
import HomeScreen from '../screens/home';

const Drawer = createDrawerNavigator();

const MyDrawer = props => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
