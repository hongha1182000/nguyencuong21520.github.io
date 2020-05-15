const utils ={
    setText(query, text) {
        document.querySelector(query).innerText = text
    },
    Validate(condition, queryErrorTag, messageError) {
        if (condition) {
            utils.setText(queryErrorTag, '')
            return true
        } else {
            utils.setText(queryErrorTag, messageError)
            return false
        }
    },
    allPassed(validateResult) {
        for (let result of validateResult) {
            if (!result) {
                return false
            }

        }
        return true
    },
    setLoadingContent(query,html){
        document.querySelector(query).innerHTML = html
    }
}