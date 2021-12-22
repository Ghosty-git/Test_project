const stateCreator = (type, error) => {
    switch (type) {
        case "succes":
            return {
                success: true,
                loading: false,
                failed: false,
                error: "",
            };
        case "loading":
            return {
                success: false,
                loading: true,
                failed: false,
                error: "",
            };

        case "failed":
            return {
                success: false,
                loading: false,
                failed: true,
                error: error,
            };

        default:
            return {
                success: false,
                loading: false,
                failed: false,
                error: "",
            };
    }
}

export default stateCreator