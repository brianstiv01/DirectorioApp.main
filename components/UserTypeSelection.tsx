import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { UserTypeSelectionNavigationProp } from '../types';

const UserTypeSelection: React.FC = () => {
  const navigation = useNavigation<UserTypeSelectionNavigationProp>();
  const { theme } = useTheme();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.5));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  const handleUserTypeSelection = (userType: 'CLIENTE' | 'EMPRESA') => {
    if (userType === 'CLIENTE') {
      navigation.navigate('ClientRegistration');
    } else {
      navigation.navigate('CompanyRegistration');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim, color: theme.colors.text }]}>
        BIENVENIDO A FINDERCOL
      </Animated.Text>
      <Animated.Text style={[styles.thanksText, { opacity: fadeAnim, color: theme.colors.text }]}>
        GRACIAS POR PREFERIRNOS
      </Animated.Text>
      <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => handleUserTypeSelection('CLIENTE')}
        >
          <Text style={styles.buttonText}>CLIENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => handleUserTypeSelection('EMPRESA')}
        >
          <Text style={styles.buttonText}>EMPRESA</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  thanksText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserTypeSelection;