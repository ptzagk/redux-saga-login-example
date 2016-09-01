import React, {Component, PropTypes as PT} from "react";
import FormGroup from "components/Common/Forms/FormGroup";
import Button from "components/Common/Button";

class LoginForm extends Component {

    static propTypes = {
        processing: PT.bool, // send request?
        errors: PT.object,
        email: PT.string,
        password: PT.string,
        pause: PT.bool,
        login: PT.func,
        onChangeHandle: PT.func
    }

    static defaultProps = {
        processing: false,
        errors: {},
        email: "",
        password: "",
        pause: true,
        login: () => {},
        onChangeHandle: () => {}
    }

    constructor(props) {
        super(props);
    }

    onChangeHandle(e) {
        this.props.onChangeHandle({ [e.target.name]: e.target.value });
    }

    submit(e) {
        e.preventDefault();
        this.props.login({ email: this.props.email, password: this.props.password });
    }

    render() {

        const { processing, errors, email, password, pause } = this.props;
        const error_email = ( errors.email === "" ) ? null : errors.email;
        const error_password = ( errors.password === "" ) ? null : errors.password;

        return (
            <form>
                <h2>Login</h2>
                <hr />
                <FormGroup label="Email" errorText={error_email}>
                    <input
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={::this.onChangeHandle}
                        disabled={processing}
                        />
                </FormGroup>

                <FormGroup label="Password" errorText={error_password}>
                    <input
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={::this.onChangeHandle}
                        disabled={processing}
                        />
                </FormGroup>

                <Button busy={processing} disabled={pause} onClick={::this.submit}>
                    { processing && "Send ..." }
                    { !processing && "Login" }
                </Button>

            </form>
        );
    }
}

export default LoginForm;
