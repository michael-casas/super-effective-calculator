import React from "react";
import { View, Platform } from "react-native";
import {
  SearchBar as ElementSearchBar,
  SearchBarProps as ElementSearchBarProps,
} from "react-native-elements";
import { useLayoutListener } from "../../hooks/layout.hooks";
import { searchBarStyles } from "./search-bar.style";

export type SearchBarUIProps = {} & ElementSearchBarProps;

export const SearchBarUI: React.FC<SearchBarUIProps> = ({
  onChange,
  onChangeText,
  onSubmitEditing,
  placeholder,
  searchIcon,
  value,
  ...props
}) => {
  useLayoutListener();

  return (
    <View style={[searchBarStyles.container]}>
      <ElementSearchBar
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onChangeText={onChangeText}
        searchIcon={searchIcon}
        onSubmitEditing={onSubmitEditing}
        // Defaults
        lightTheme={true}
        returnKeyType={"search"}
        autoCapitalize={"none"}
        autoCorrect={false}
        containerStyle={
          value.length === 0
            ? [searchBarStyles.searchBarContainer]
            : [searchBarStyles.searchBarContainerFresh]
        }
        rightIconContainerStyle={[searchBarStyles.rightContainer]}
        inputContainerStyle={[searchBarStyles.inputContainer]}
        inputStyle={[searchBarStyles.input]}
      />
    </View>
  );
};
