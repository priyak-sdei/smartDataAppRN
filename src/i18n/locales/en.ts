const en = {
    common: {
        Hi: 'Hello, {{name}}!',
        Welcome: 'Welcome',
        ok: 'OK!',
        cancel: 'Cancel',
        back: 'Back',
        logOut: 'Log Out',
    },
    errorScreen: {
        title: 'Something went wrong!',
        reset: 'RESET APP',
        traceTitle: 'Error from %{name} stack',
    },
    errors: {
        invalidEmail: 'Invalid email address.',
    },
    loginScreen: {
        logIn: 'Log In',
        enterDetails:
            "Enter your details below to unlock top secret info. You'll never guess what we've got waiting. Or maybe you will; it's not rocket science here.",
        emailFieldLabel: 'Email',
        passwordFieldLabel: 'Password',
        emailFieldPlaceholder: 'Enter your email address',
        passwordFieldPlaceholder: 'Super secret password here',
        tapToLogIn: 'Tap to log in!',
        hint: 'Hint: you can use any email address and your favorite password :)',
    },
};

export default en;
export type Translations = typeof en;
