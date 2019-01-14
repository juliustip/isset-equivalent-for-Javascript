function isset($type) {
    return $type !== 'undefined';
}

//Usage isdef(typeof SOMETHING)

//Example 
//json data {"status": "error","set": "yes"}
//if(isset(typeof status){console.log ('status exits')}else{console.log ('status does not exits')}}
