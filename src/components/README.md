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
