/* eslint-disable quotes */
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

import WelcomeStack from "../default/stack" // Replace with other module Stacks

const { Navigator, Screen } = createStackNavigator()

const screenOptions = { headerShown: false, ...TransitionPresets.SlideFromRightIOS }

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
        <Screen name="Welcome" component={WelcomeStack} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation
