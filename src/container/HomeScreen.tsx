import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseComponent from '../components/BaseComponent'
import { screenWidth } from '../theme/layouts'
import CustomTextTicker from '../components/custom/CustomTextTicker'
import TitleAndSearchButton from '../components/home/TitleAndSearchButton'
import CardItem from '../components/home/CardItem'
import { FlatListVertical } from '../components/custom/FlatListVertical'
import LoadingCardItem from '../components/loading/LoadingCardItem'
import DeviceInfo from 'react-native-device-info';
import { baseUrl } from '../services/api/index.service'
import { Platform } from 'react-native'
import Keychain from 'react-native-keychain';
import { useAppDispatch, useAppSelector } from '../hooks/dispatch'
import { clearHome, requestHome } from '../redux/actions/home'
import { loadLoading, loadMore } from '../redux/actions'
import NoData from '../components/custom/NoData'
import SlideShow from '../components/home/SlideShow'
import NormalDate from '../services/utils'

const HomeScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const loading = useAppSelector(state => state.loading)
    const dispatch = useAppDispatch();
    const homeState: any = useAppSelector(state => state.home.data?.data);
    const homeSlide: any = useAppSelector(state => state.home.data?.slide);

    useEffect(() => {
        dispatch(loadLoading(true));
        dispatch(requestHome());
        async function _getDeviceInfo() {
            let uniqueId = DeviceInfo.getUniqueIdSync();
            let model = Platform.OS;
            let deviceType = DeviceInfo.getDeviceType();
            _mobileAuthorize(uniqueId, model, deviceType);
        }
        _getDeviceInfo();
    }, [])

    function _mobileAuthorize(uniqueId: string, model: string, deviceType: string) {
        fetch(baseUrl + 'authorize', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                device_id: uniqueId,
                device_type: deviceType,
                model: model
            })
        }).then(response => response.json())
            .then(async (responseData) => {
                let resData: any = JSON.parse(JSON.stringify(responseData));
                if (resData.status_code == 200) {
                    let first_key = resData.data.secret_key;
                    let second_key = resData.data.secret_iv;
                    await Keychain.setGenericPassword(first_key, second_key);
                    dispatch(loadLoading(false));
                } else dispatch(loadLoading(false));
            })
    }

    const onRefresh = () => {
        dispatch(loadLoading(true));
        dispatch(clearHome());
        dispatch(requestHome());
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 200);
    }

    const onEndReached = () => {
        dispatch(loadMore(true));
        setTimeout(() => {
            dispatch(loadLoading(false));
        }, 200);
    }

    return (
        <BaseComponent style={{ flex: 1 }} >
            {
                loading ? <LoadingCardItem /> : homeState?.data?.length == 0 ? <NoData /> :
                    <FlatListVertical
                        data={homeState?.data}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        onEndReached={onEndReached}
                        ListHeaderComponent={
                            <>
                                <SlideShow
                                    data={homeSlide}
                                // onChageIndex={() => { }}
                                />
                                <CustomTextTicker
                                    text={'សម្ដេចតេជោ ហ៊ុន សែន អញ្ជើញជាអធិបតីក្នុងពិធីបិទសន្និបាតត្រួតពិនិត្យលទ្ធផលការងារអញ្ជើញជាអធិបតីក្នុងសន្និបាតត្រួតពិនិត្យលទ្ធផលការងារអញ្ជើញជាអធិបតីក្នុងសន្និបាតត្រួតពិនិត្យលទ្ធផលការងារអញ្ជើញជាអធិបតីក្នុង'}
                                />
                                <TitleAndSearchButton
                                    title='ព័ត៌មានថ្មីៗ'
                                    onPress={()=>{}}
                                />
                            </>
                        }
                        renderItem={({ item }: any) => (
                            <CardItem
                                title={item.title}
                                date={NormalDate(item.created_at)}
                                image={item.image_url}
                                onPress={() => {}}
                            />
                        )}
                        ListFooterComponent={
                            <>
                                {
                                    loading && <LoadingCardItem />
                                }
                            </>
                        }
                        ListFooterComponentStyle={{ paddingBottom: screenWidth(50) }}
                    />
            }
        </BaseComponent>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    videoContainer: {
        width: '100%',
        height: screenWidth(240)
    }
})