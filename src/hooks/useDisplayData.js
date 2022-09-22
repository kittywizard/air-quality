function useDisplayData(props) {

    //return object with relevant data
    const refinedMeasurementData = props.measurementData.map(data => {
        const formattedDate = new Date(data.date.local);
        const readableDate = 
        `${formattedDate.getMonth() + 1}/${formattedDate.getDate()}`;

        const valueObjString = `value${data.parameter}`;
        
        return {
            date: readableDate,
            [valueObjString]: data.value,
            unit: data.unit,
            parameter: data.parameter,
            location: data.location
        }

    });

    //sort data by parameter type
    refinedMeasurementData.sort((a,b) => {
        const paramA = a.parameter.toUpperCase();
        const paramB = b.parameter.toUpperCase();

        if(paramA < paramB) {
            return -1;
        }
        
        if (paramA > paramB) {
            return 1
        }
        return 0;
    });
    
        //grab all parameters, kill the duplicates + the ones i don't want
        let parametersAvailable = refinedMeasurementData.map(param => {
            if(param.parameter === "um025" 
            || param.parameter === "um100" 
            || param.parameter === "um010") {
                return '';
            } else {
                return param.parameter;
            }
        });
    
        //let parametersAvailable = refinedMeasurementData.map(param => param.parameter)
        const paramSet = new Set(parametersAvailable);
        parametersAvailable = Array.from(paramSet);
        parametersAvailable.pop(); //may break later, removing blank at the end

    return {refinedMeasurementData, parametersAvailable}
}

export default useDisplayData