
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Categorias from './Categorias';
import Carrinho from './Carrinho';
import Padaria from './Padaria';
import Carnes from './Carnes';
import Mercearia from './Mercearia';
import Matinais from './Matinais';
import FriosLaticinios from './FriosLaticinios';
import Bebidas from './Bebidas';
import UtilidadesDomesticas from './UtilidadesDomesticas';
import Limpeza from './Limpeza';
import Higiene from './Higiene';
import Hortifruti from './Hortifruti';
import Bomboniere from './Bomboniere';
import Pagamento from './Pagamento';
import { CartProvider } from './CartContext';
import Bem_Vindo from './index';
import Acesso from './entrada';
import Cadastro from './cadastro';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CategoriasStack = () => {
  return (
    <Stack.Navigator>
      
     <Stack.Screen name="index" component={Acesso} options={{ headerShown: false }} />
      <Stack.Screen name="entrada" component={Bem_Vindo} options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen name="Padaria" component={Padaria} />
      <Stack.Screen name="Carnes" component={Carnes} />
      <Stack.Screen name="Mercearia" component={Mercearia} />
      <Stack.Screen name="Matinais" component={Matinais} />
      <Stack.Screen name="FriosLaticinios" component={FriosLaticinios} />
      <Stack.Screen name="Bebidas" component={Bebidas} />
      <Stack.Screen name="UtilidadesDomesticas" component={UtilidadesDomesticas} />
      <Stack.Screen name="Limpeza" component={Limpeza} />
      <Stack.Screen name="Higiene" component={Higiene} />
      <Stack.Screen name="Hortifruti" component={Hortifruti} />
      <Stack.Screen name="Bomboniere" component={Bomboniere} />
      <Stack.Screen name="Pagamento" component={Pagamento} />

    </Stack.Navigator>

  );
};

const CarrinhoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carrinho" component={Carrinho} />
      <Stack.Screen name="Pagamento" component={Pagamento} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Categorias') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Carrinho') {
                iconName = focused ? 'cart' : 'cart-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#034EA1',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Categorias"
            component={CategoriasStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Carrinho"
            component={CarrinhoStack}
            options={{ headerShown: false }}

          />

        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;