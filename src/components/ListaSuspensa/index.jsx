export function ListaSuspensa({children, htmlFor}) {
    return (
        <select htmlFor={htmlFor}>
            {children}
        </select>
    );
}
