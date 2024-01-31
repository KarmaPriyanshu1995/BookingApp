import {PropsWithChildren} from 'react';
import {View} from 'react-native';
type Prop = PropsWithChildren<{
  children?: any;
  style?: any;
  pointerEvents?: 'none' | 'box-only' | 'auto';
}>;
export const CustomView = ({
  children,
  style,
  pointerEvents = 'auto',
  ...props
}: Prop) => {
  return (
    <View style={[style]} pointerEvents={pointerEvents} {...props}>
      {children && children}
    </View>
  );
};
