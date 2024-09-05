import CompanyList from "../../components/CompanyList";
import SearchForm from "../../components/SearchForm";
import SkillList from "../../components/SkillList";

function Home(){
      return (
            <>
            <SearchForm />
            <SkillList />
            <CompanyList />
            </>
      )
}
export default Home;