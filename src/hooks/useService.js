import { useEffect, useState } from 'react';

const useService = () => {
    //set data in services
    const [services, setServices] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Imran122/fakedb/main/fakedata.JSON')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices]
}

export default useService;