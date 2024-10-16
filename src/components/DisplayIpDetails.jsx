import DetailsElement from './DetailsElement'

export default function DisplayIpDetails() {
    return(
        <div>
            <DetailsElement 
                dataName='IP Address'
                dataInfo='45.134.212.41'
            />
            <DetailsElement 
                dataName='Location'
                dataInfo='Warsaw, Poland'
            />
            <DetailsElement 
                dataName='Timezone'
                dataInfo='UTC +02:00'
            />
            <DetailsElement 
                dataName='ISP'
                dataInfo='CDNEXT'
            />
        </div>
    )
}