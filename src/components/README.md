# Components

## Naming convention

The components that have the tendency of being used round the application have the _base- prefix attached. We are dynamically importing them using webpacks require.context() hence all base components should follow this convention. All other components should be names using a capitalized convention e.g AppModal.

## SFC structure

For ease and great Developer Experience the template of all components would be placed in the middle of the script and styling.

## Props and Events in components

When inserting single or double props/events, the following syntax should be used:

```

 :propName="propValue"
 @eventName="eventValue"

```

In a case where there are up to three or more, or the amount of props/events has a high tendency to increase with the features/complexity of the application, the following syntax should be used because of readability:

```

 v-bind="{propName: propValue}"
 v-on="{eventName: eventValue}"

```

## Unit Testing

All component tests should be kept in the the components folder and saved in the below mentioned format to foster writing of unit tests.

```

[ComponentName].spec.ts

```

## Styling
Styles would make use of module instead of scoped to avoid clashing class names when the project gets bigger. when modules are used, the generated class name follows the format COMPONENT-NAME_class-name_HASH e.g _base-button_u-disabled_39823

## 3RD party or vendor components
3rd party components or vendor components like fontawesome should be wrapped in a component before use. In case of change or extension of component.
