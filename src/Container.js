export class Container extends React.Component {
    render() {
        style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
            <Map google={this.props.google} />
        <div>
        )
    }
}

export default GoogleApiComponent({
    apiKey: 'AIzaSyBFYnv64vW6Qm-bPFZGM0rWQvgkae7WKjA'
})(Container)