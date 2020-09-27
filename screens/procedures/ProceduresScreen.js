import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {View} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useLinking } from '@react-navigation/native';

export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/7/qo/df/zAqODFCAYXTtGMA-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>IAF Insults U.S. Aikidoka with Gender Group Pick</Text>
                <Text note numberOfLines={3}>he International Aikido Federation recently announced that Sharon Dominguez of the United States Aikido Federation had been named as the sole representative of the United States in the IAF’s Gender Balance Working Group.</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/international-aikido-federation-name-a-new-u-s-rep-for-the-iaf-gender-working-group?source_location=topic_page')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/7/jt/ui/zUjTuIgbZOSJMSS-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>End The Tax on Necessary Menstrual Products in The US</Text>
                <Text note numberOfLines={3}>We need to work together to end the tampon tax nationwide. Affordable sanitary products are not a luxury and need to be treated as what they are— a necessity. Condoms and Viagra are not taxed whereas pads, tampons, diva cups, and other necessary hygiene products are. According to InStyle, “Using an average state sales tax of 5 percent, Americans who menstruate are spending more than $275 million a year on state taxes on their period products.” Senator Christina Garcia says, “The ‘tampon tax’ is now “the only gender-specific tax on the books in California.” According to Refinery29, “1 in 5 American girls have either left school early or missed it entirely because they didn’t </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>The Action PAC</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/donald-j-trump-end-the-tax-on-necessary-menstrual-products-in-the-us?source_location=topic_page')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/5/tg/gk/uNtGGkZoxgRnuuz-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Justice for Breonna Taylor Petition</Text>
                <Text note numberOfLines={3}>Nearly four months ago, a division of the Louisville Police Department performed an illegal, unannounced drug raid on her home. Not a single officer announced themselves before ramming down her door and firing 22 shots, shooting Breonna 8 times, killing her. </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/donald-j-trump-end-the-tax-on-necessary-menstrual-products-in-the-us?source_location=topic_page')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/5/iw/ta/hGIWtaAaRuIKGJv-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Justice for Tony McDade Petition</Text>
                <Text note numberOfLines={3}>Tony McDade was a transgender black man who got killed by police in Tallahassee. As of right now I havenâ€™t seen many people talking about this, but I would really like to get his name out there. It would be very appreciated if you could sign this petition and encourage others to do so as well. </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/black-lives-matter-activists-justice-for-tony-mcdade')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/4/qp/ez/fpqPEZrqaQbxqCc-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Eliminate The Gender Question On Instagram for good</Text>
                <Text note numberOfLines={3}>Instagram is misusing the term gender and confusing it with sex. The current question that Instagram is asking is, "What is your gender," and providing the options male, female, and not specified. First of all this is the wrong question, the question that they should be asking is," What is your sex." However, that is not the only issue. The goal of this petition is to remove gender bias from algorithmic filtering and to achieve this we must first begin with eliminating questions like, what is your gender? This question is primarily asked for demographic purposes which is used for marketing and opinion research. Algorithmic filtering reflects societies' biases and from here, gen</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/instagram-eliminate-the-gender-question-on-instagram?source_location=topic_page')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            
          </List>
        </Content>
      </Container>
    );
  }
}