import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function GoBack() {
      const navigate = useNavigate();

      const handleBack = () => {
            navigate(-1);
      };

      return (
            <Button onClick={handleBack} className='mbt-10'>
                  Trở lại
            </Button>
      );
}
export default GoBack;