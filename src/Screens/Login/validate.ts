import { User } from "./types"

function validate(props: User) {
    if (props.email.length === 0) {
        return props.changeError({
            email: "E-mail obrigatório!",
            password: "",
        })
    } else if (!props.check_email(props.email)) {
        return props.changeError({
            email: "Formato do e-mail incorreto!",
            password: "",
        })
    } else if (props.password.length === 0) {
        return props.changeError({
            email: "",
            password: "insira uma senha!",
        })
    } else if (props.password.length < 6) {
        return props.changeError({
            email: "",
            password: "Minimo de 6 caracteres para a senha!",
        })
    } else {
        return props.changeError({
            email: props.email,
            password: props.password,
        })
    }
}

export default validate;