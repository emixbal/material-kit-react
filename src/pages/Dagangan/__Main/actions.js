const key = "DAGANGAN"

export const type = {
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_ANGKA: `${key}_CHANGE_ANGKA`,
    RESET: `${key}_RESET`,
};

export const changeLoading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
});

export const changeAngka = (value) => ({
    type: type.CHANGE_ANGKA,
    value,
});

export const handleChangeAngka = (value) => {
    return async (dispatch, getState) => {
        dispatch(changeAngka(1))
    }
}