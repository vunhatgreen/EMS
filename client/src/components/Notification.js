import React from "react"
import NotificationAlert from "react-notification-alert"

export default class Notification extends React.Component {
    state = {
        visible: true
    };
    notificationAlert = React.createRef();
    notify(place) {
        var color = Math.floor(Math.random() * 5 + 1);
        var type;
        switch (color) {
            case 1:
                type = "primary"
                break
            case 2:
                type = "success"
                break;
            case 3:
                type = "danger"
                break;
            case 4:
                type = "warning"
                break
            case 5:
                type = "info"
                break
            default:
                break
        }
        var options = {}
        options = {
            place: place,
            message: (
                <div>
                    <div>
                        {this.props.content}
                    </div>
                </div>
            ),
            type: type,
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7
        };
        this.notificationAlert.current.notificationAlert(options)
    }
    render() {
        return (
            <>
                <NotificationAlert ref={this.notificationAlert} />
                <div onClick={() => this.notify("br")}>
                    {this.props.children}
                </div>
            </>
        )
    }
}