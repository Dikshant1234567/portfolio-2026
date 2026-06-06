
interface Buttonprops {
    value: string,
}
const Button = ({ value }: Buttonprops) => {
    return (
        <button className='btn-primary'>
            {value}
        </button>
    )
}

export default Button
