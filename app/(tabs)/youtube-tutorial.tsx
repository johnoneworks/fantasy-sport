import { StyleSheet, SafeAreaView } from 'react-native';

import { Field } from '@/components/Field'; 

export default function TabYoutubeTutorial
() {
  return (
    <SafeAreaView style={styles.container}>
      <Field />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
