import { ScrollView } from "react-native";
import { Card, Text } from "react-native-elements";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />

        {/* Address */}
        <Text>1 Nucamp Way</Text>
        <Text>Seattle, WA 98001</Text>
        <Text>U.S.A.</Text>

        {/* Phone and Email */}
        <Text style={{ marginTop: 10 }}>Phone: 1-206-555-1234</Text>
        <Text>Email: campsites@nucamp.co</Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;
