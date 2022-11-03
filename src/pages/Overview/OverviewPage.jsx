import { useSearchParams } from 'react-router-dom';
import Header from '../../component/Layout/Header';
import Footer from '../../component/Layout/Footer';
import OverviewPageTemplate from './OverviewPageTemplate';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const districtId = parseInt(searchParams.get('districtId'), 10); // 국가
  const facilityId = parseInt(searchParams.get('facilityId'), 10); // 도시
  console.log(districtId, facilityId);
  const changeDistrict = (districtId) => {
    if (!districtId && !searchParams.get('districtId')) {
      return;
    }
    searchParams.set('districtId', districtId + '');
    setSearchParams(searchParams);
  };

  const changeFacility = (facilityId) => {
    if (!facilityId) {
      searchParams.delete('facilityId');
    } else {
      searchParams.set('facilityId', facilityId + '');
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Header />
      <OverviewPageTemplate
        districtId={districtId}
        changeDistrict={changeDistrict}
        facilityId={facilityId}
        changeFacility={changeFacility}
      />
      <Footer />
    </>
  );
}
