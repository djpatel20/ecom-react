import * as yup from "yup";

export const handleValidation = (formType) => {
    let schema = {
        email: yup.string()
            .email("Invalid email format")
            .required("Email is required"),

        password: yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    };

    if (formType === "signup") {
        schema = {
            ...schema,
            myname: yup.string()
                .max(25, "Name must be at most 25 characters")
                .min(2, "Name must be at least 2 characters")
                .required("Required Field"),

            confirm_password: yup.string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
        };
    }

    return yup.object(schema);
};
