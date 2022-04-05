import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";

export default extendTheme(
  {
    colors: {
      brand: baseTheme.colors.teal,
    },
    // components: {
    //   Alert: {
    //     defaultProps: {
    //       colorScheme: "blue",
    //     },
    //   },
    //   Button: {
    //     defaultProps: {
    //       colorScheme: "blue",
    //     },
    //   },
    // },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
