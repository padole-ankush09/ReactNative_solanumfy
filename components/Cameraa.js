import { Text, View,TouchableOpacity, Platform,ActivityIndicator,useState, Alert } from 'react-native'
import React, { Component } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Loader from './Loader';



// const [spinner, setSpinner] = useState(false); 
export class Cameraa extends Component {

  constructor(props) {
    super(props);
    
  this.state = {
    isVisible: false,
    isLoading: false,
  };
}

  pickFromGallery = async () => {
    this.setState({
      isLoading: false
    });
     const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (granted) {
        let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1 ,
        includeBase64: true,
        });

      if (!data.cancelled) {
            let newFile = {
            uri: data.uri,
            // type: `test/${data.uri.split('.')[1]}`,
            // name: `test.${data.uri.split('.')[1]}`
            type : 'image/jpg',
          name : 'image.jpg',
          }
          var img=data.uri;
          var formdata = new FormData();
formdata.append("file", newFile, "[PROXY]");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  includeBase64:true,
  
};
      // }
// } else {
//   Alert.alert('You need to give permissions');
// }
// try{
this.setState({
  isLoading: true
});
//  const response=fetch("https://us-central1-certain-sun-366400.cloudfunctions.net/predict", requestOptions)
 const response=fetch("https://asia-south1-certain-sun-366400.cloudfunctions.net/predict2", requestOptions)
 .then(response => response.json())
  .then(result => {console.log(result)
   
    // setSpinner(false);
    this.setState({
      isLoading: false
    });

        const { disease=(result.class) , confidence,  } = result;
        // let disease = disease.split('__').join(' ');
         this.props.navigation.navigate('Predictionscreen', {
          disease,
          confidence,
    img
        });
      })
      .catch(error =>
        {this.setState({
          isLoading:false
        }); Alert.alert('Oops!,Try with different Camera angles.');
        console.log('error', error)});
    //  else {
    //   console.log('You need to give permissions');
    //     }
  } else {
    console.log('You need to select image');
  }
} else {
    console.log('You need to give permissions');
}

    
};
      


  
   Takeaphoto = async () => {
    this.setState({
      isLoading: false
    });
    
     const { granted } = await Permissions.askAsync(Permissions.CAMERA);
     if (granted) {
      let data = await ImagePicker.launchCameraAsync({ 
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1 ,
        includeBase64: true,
      }
        
    );
    if (!data.cancelled) {

      let newFile = {
        uri: data.uri,
        // type: `test/${data.uri.split('.')[1]}`,
        // name: `test.${data.uri.split('.')[1]}`
        type : 'image/jpg',
        name : 'image.jpg',
      }

      var img=data.uri;
      var formdata = new FormData();
      formdata.append("file", newFile, "[PROXY]");

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      this.setState({
        isLoading: true
      });
      // const response=fetch("https://us-central1-certain-sun-366400.cloudfunctions.net/predict", requestOptions)
      const response=fetch("https://asia-south1-certain-sun-366400.cloudfunctions.net/predict2", requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result);
        // setSpinner(false);
        this.setState({
          isLoading: false
        });

            const { disease=(result.class) , confidence,  } = result;
            // let disease = disease.split('__').join(' ');
            this.props.navigation.navigate('Predictionscreen', {
              disease,
              confidence,
              img
            });
          })
          .catch(error =>
            {this.setState({
              isLoading:false
            });Alert.alert('Oops!,Try with different Camera angles.'); 
            console.log('error', error)});
      } else {
        console.log('You need to select image');
      }
    } else {
        console.log('You need to give permissions');
    }
    // };
  };
   render() {
    return (
      <View>
      <Loader isLoading={this.state.isLoading} />
    <TouchableOpacity
     onPress={this.pickFromGallery}
     style={{ backgroundColor: '#1A8766',borderRadius:5,padding:8,width:150,height:38,alignItems: 'center',marginBottom:10,marginLeft:42,marginTop:30 }}>
     <Text style={{ fontSize: 15, color: '#fff'}}>Upload from Gallery</Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={this.Takeaphoto}
    //  onPress={() => this.props.navigation.navigate('Predictionscreen')} //=> alert('Hello, world!')}
     style={{ backgroundColor: '#1A8766',borderRadius:5,padding:8,width:150,height:38,alignItems: 'center',marginLeft:42 }}>
     <Text style={{ fontSize: 15, color: '#fff'}}> Take a photo</Text>
    </TouchableOpacity>
    </View>
    )
  };
}

export default Cameraa

