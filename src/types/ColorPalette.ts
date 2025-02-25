// types.ts
export interface ColorPalette {
    primary: string;
    background: string;
    mutedGrey: string;
    darkGrey: string;

    text: string;
    border: string;
    notification: string;
    placeholder: string;
    descriptionText: string;
    buttonBackground: string;
    income: string;
    incomeBackground: string;
    expense: string;
    expenseBackground: string;
    black: string;
    overlayColor: string;
    white: string;
}

export interface ThemeColorPalette {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
}

export interface ExtendedTheme {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    } & ColorPalette; // Merge with CustomColorPalette
}
