import React from 'react';

import Home from '../screens/Home';
import Tab1 from '../screens/Tab1';
import detailView from '../screens/DetailView';
import Mypage from '../screens/Mypage';
import Enroll from '../screens/Enroll';
import PetEdit from '../screens/PetEdit';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{title: 'HOME'}} />
      <Stack.Screen
        name="detailView"
        component={detailView}
        options={({route}: any) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

const MypageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mypage"
        component={Mypage}
        options={{title: '마이페이지'}}
      />
      <Stack.Screen
        name="enroll"
        component={Enroll}
        options={({route}: any) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="petEdit"
        component={PetEdit}
        options={({route}: any) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

const HomeTab = (props: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{tabBarVisible: props.tabBarVisible}}
      />
      <Tab.Screen name="tab1" component={Tab1} />
      <Tab.Screen name="마이페이지" component={MypageStack} />
    </Tab.Navigator>
  );
};
function mapStateToProps(state: any) {
  return {
    tabBarVisible: state.navOption.tabBarVisible,
  };
}
export default connect(mapStateToProps, null)(HomeTab);
