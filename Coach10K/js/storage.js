const Storage = {

    save(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    },

    load(key, defaultValue = null) {

        const data =
            localStorage.getItem(key);

        if (!data) {
            return defaultValue;
        }

        return JSON.parse(data);
    }

};
