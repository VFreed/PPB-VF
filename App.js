import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './page/welcome.js';
import Home from './page/project_list.js';
import Boxx from './page/boxx.js';
import Counterbtt from './page/counterbtt.js';
import Halaman2 from './page/halaman2.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Boxx" component={Boxx} />
        <Stack.Screen name="Counterbtt" component={Counterbtt} />
        <Stack.Screen name="Halaman2" component={Halaman2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
