import * as OneSignal from '@onesignal/node-onesignal';
import 'dotenv/config';


const notify = (msg, callback) => {
    if(msg != ''){

        const ONESIGNAL_APP_ID = 'b62c4fc3-5caa-4cba-bb35-7f3858e9d5b6';
        const app_key_provider = {
            getToken() {
                return process.env.onesignal_api_key;
            }
        };
        console.log('app_key_provider', app_key_provider.getToken());
        const configuration = OneSignal.createConfiguration({
            authMethods: {
                app_key: {
                    tokenProvider: app_key_provider
                }
            }
        });
        const client = new OneSignal.DefaultApi(configuration);
        const notification = new OneSignal.Notification();
        notification.app_id = ONESIGNAL_APP_ID;
        notification.included_segments = ['Subscribed Users'];
        notification.contents = {
        en: msg
        };

        client.createNotification(notification);
        // const {id} = await client.createNotification(notification);
        // const response = await client.getNotification(ONESIGNAL_APP_ID, id);
        // console.log(response);

    }
    return callback(null, msg)
}

export default notify;