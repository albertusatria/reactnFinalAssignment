import {StyleSheet} from 'react-native';

const stylesApp = StyleSheet.create({
  landingpagewrapper: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingpage: {
    padding: 20,
  },
  landingpageTitleWrapper: {
    marginBottom: 50,
    alignItems: 'center',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderStyle: 'solid',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  fieldControl: {
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderStyle: 'solid',
    borderRadius: 5,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 0, //https://stackoverflow.com/questions/37878613/react-native-textinput-displays-wrong-when-changing-height-on-android
  },
  btnNavigate: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#c40827',
    height: 30,
    width: 200,
  },
  btnSubmit: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#c40827',
    height: 30,
    width: '100%',
    marginBottom: 20,
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    width: '100%',
  },
  itemActivityContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingBottom: 5,
    marginBottom: 15,
  },
  itemActivity: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  itemActivityNotFound: {
    fontStyle: 'italic',
    fontSize: 12,
  },
  headings: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  itemActivityStatus: {
    fontSize: 12,
    textTransform: 'lowercase',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default stylesApp;
