import ChefClaudeIcon from "../assets/chef-claude-icon.svg";

function Header(){
    return (
        <Header>
            <nav>
                <img src={ChefClaudeIcon} alt="chef claude icon" />
                <p className="header-title">Chef Claude</p>
            </nav>
        </Header>
    )
}

export default Header