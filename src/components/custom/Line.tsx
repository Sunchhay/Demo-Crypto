import { StyleSheet, View } from "react-native";
import { screenWidth } from "../../theme/layouts";
import colors from "../../theme/colors";

export const VerticalLine = (props: any) => <View style={{ height: '70%', width: props.width ? props.width : screenWidth(1), backgroundColor: colors.lightGrayColor }} />