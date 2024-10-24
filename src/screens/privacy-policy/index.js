import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'

const PrivacyPolicy = () => {
    return (
        <View style={styles.container}>
            <Header title={'Privacy Policy'} />
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.aboutTitle}>
                    AgenTech Privacy Policy
                </Text>
                <Text style={styles.para}>
                    This Privacy Policy outlines how AgenTech IT Solutions collects, uses, discloses, and protects your personal information when you use our mobile application ("App").
                </Text>
                <Text style={styles.title}>
                    1. Information We Collect:
                </Text>
                <Text style={styles.subTitle}>
                    Personal Information:
                </Text>
                <Text style={styles.para}>
                    We may collect personal information such as your name, email address, phone number, and other contact information when you voluntarily provide it to us, for example, when creating an account or contacting our customer support.
                </Text>
                <Text style={styles.subTitle}>
                    Device Information:
                </Text>
                <Text style={styles.para}>
                    We may collect information about your device, including device type, operating system, and unique device identifiers.
                </Text>
                <Text style={styles.subTitle}>
                    Usage Data:
                </Text>
                <Text style={styles.para}>
                    We may collect information about how you use our App, such as the features you access, the time spent on the App, and the actions you take within the App.
                </Text>
                <Text style={styles.title}>
                    2. How We Use Your Information:
                </Text>
                <Text style={styles.subTitle}>
                    Providing Services:
                </Text>
                <Text style={styles.para}>
                    We use your information to provide and improve our App, process payments, and communicate with you.
                </Text>
                <Text style={styles.subTitle}>
                    Customization:
                </Text>
                <Text style={styles.para}>
                    We may use your information to personalize your experience within the App, such as recommending features or content.
                </Text>
                <Text style={styles.subTitle}>
                    Analytics:
                </Text>
                <Text style={styles.para}>
                    We may use your information for analytics and research purposes to understand user behavior and improve our App.
                </Text>
                <Text style={styles.subTitle}>
                    Marketing:
                </Text>
                <Text style={styles.para}>
                    With your consent, we may use your information to send you marketing communications about our products and services. You can opt-out of marketing communications at any time.
                </Text>
                <Text style={styles.title}>
                    3. Data Sharing:
                </Text>
                <Text style={styles.para}>
                    We may share your personal information with third-party service providers who assist us in operating our App or conducting our business. These third-party service providers are obligated to protect your information.
                </Text>
                <Text style={styles.title}>
                    4. Data Security:
                </Text>
                <Text style={styles.para}>
                    We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                </Text>
                <Text style={styles.title}>
                    5. Your Rights:
                </Text>
                <Text style={styles.para}>
                    You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict the processing of your personal information. To exercise these rights, please contact us at [info@agentech.co]
                </Text>
                <Text style={styles.title}>
                    6. Children's Privacy:
                </Text>
                <Text style={styles.para}>
                    Our App is not intended for children under the age of [insert age]. We do not knowingly collect personal information from children.
                </Text>
                <Text style={styles.title}>
                    7. Changes to This Privacy Policy:
                </Text>
                <Text style={styles.para}>
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page.
                </Text>
                <Text style={styles.title}>
                    8. Contact Us:
                </Text>
                <Text style={styles.para}>
                    If you have any questions about this Privacy Policy, please contact us at [info@agentech.co]
                </Text>
            </ScrollView>
        </View>
    )
}

export default PrivacyPolicy