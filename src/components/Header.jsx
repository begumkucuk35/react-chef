import ChefClaudeIcon from "../assets/chef-claude-icon.svg";

function Header(){
    return (
        <header>
                <img src={ChefClaudeIcon} alt="chef claude icon" />
                <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}

export default Header