pragma solidity >=0.4.22 <0.9.0;

contract crowdfunding{
    struct Campaign{
        string name;
        string description;
        uint currentfunds;
        address payable recipient;
        uint investorsCount;
        uint approvalcount;
        string status;
        uint milestones;
        address[] investors; 
        uint fundsneeded;
        bool fundscollected;
    }

    Campaign[] public CampaignsList;
    string inprogress = "in progress";
    string completed = "completed";

    constructor() payable {
    }
    
    function createCampaign(string calldata proj_name, string calldata desc, uint totaldonation) public {
        Campaign memory campaignproposal;
        campaignproposal.name = proj_name;
        campaignproposal.description = desc;
        campaignproposal.currentfunds = 0;
        campaignproposal.recipient = payable(msg.sender);
        campaignproposal.investorsCount = 0;
        campaignproposal.status = inprogress;
        campaignproposal.milestones = 1;
        campaignproposal.fundsneeded = totaldonation;
        campaignproposal.fundscollected = false;
        campaignproposal.approvalcount = 0;
        CampaignsList.push(campaignproposal);
    }

    function Invest( uint indexofcampaign) public payable{
        if (CampaignsList[indexofcampaign].fundscollected == false && keccak256(bytes(CampaignsList[indexofcampaign].status)) == keccak256(bytes(inprogress))){
            CampaignsList[indexofcampaign].currentfunds += msg.value;
            if(CampaignsList[indexofcampaign].fundsneeded == CampaignsList[indexofcampaign].currentfunds){
                CampaignsList[indexofcampaign].fundscollected = true;
            }
            if (CampaignsList[indexofcampaign].investors.length == 1){
                CampaignsList[indexofcampaign].investors[0] = payable(msg.sender);
            }
            else{
                CampaignsList[indexofcampaign].investors.length;
                CampaignsList[indexofcampaign].investors.push(msg.sender);
            }
            CampaignsList[indexofcampaign].investorsCount += 1;
        }
    }

    function giveApproval( uint indexofcampaign) public{
        bool check = false;
        for(uint i = 0 ; i < CampaignsList[indexofcampaign].investors.length; i++){
            if (CampaignsList[indexofcampaign].investors[i] == msg.sender){
                check = true;
                break;
            }
        }
        if (check == true){
            CampaignsList[indexofcampaign].approvalcount += 1;
        }
    }

    function retrieveMoney(uint indexofcampaign) public payable {
        if (CampaignsList[indexofcampaign].recipient == msg.sender && CampaignsList[indexofcampaign].fundscollected == true && keccak256(bytes(CampaignsList[indexofcampaign].status)) == keccak256(bytes(inprogress))){
            if (CampaignsList[indexofcampaign].milestones == 1){
                uint currentmoney = CampaignsList[indexofcampaign].currentfunds; 
                CampaignsList[indexofcampaign].currentfunds -= currentmoney/4;
                CampaignsList[indexofcampaign].recipient.transfer(currentmoney/4);
            }
            else if (CampaignsList[indexofcampaign].approvalcount >= CampaignsList[indexofcampaign].investorsCount/4){
                uint currentmoney = CampaignsList[indexofcampaign].currentfunds; 
                if (CampaignsList[indexofcampaign].milestones == 2 || CampaignsList[indexofcampaign].milestones == 3 ){
                    CampaignsList[indexofcampaign].currentfunds -= currentmoney/2;
                    CampaignsList[indexofcampaign].recipient.transfer(currentmoney/2);
                }
                else if (CampaignsList[indexofcampaign].milestones == 4){
                    CampaignsList[indexofcampaign].recipient.transfer(currentmoney*(1 ether));
                }
            }
        }
    }
        
    function updateMilestones(uint indexofcampaign) public {
        if(CampaignsList[indexofcampaign].recipient == msg.sender && CampaignsList[indexofcampaign].milestones < 4){
            CampaignsList[indexofcampaign].milestones += 1;
        }
    }

    function EndCampaign(uint indexofcampaign) public {
        if (CampaignsList[indexofcampaign].recipient == msg.sender){
            CampaignsList[indexofcampaign].status = "completed";
        }
    }

    function getCampaignName(uint id) external view returns (string memory){
        return (CampaignsList[id].name );
    }
    function getCampaignDesc(uint id) external view returns (string memory){
        return ( CampaignsList[id].description );
    }
    function getCampaignMilestones(uint id) external view returns ( uint){
        return ( CampaignsList[id].milestones );
    }
    function getCampaignTargetAmount(uint id) external view returns ( uint){
        return ( CampaignsList[id].fundsneeded );
    }
    function getCampaignCurrentFunds(uint id) external view returns ( uint){
        return ( CampaignsList[id].currentfunds );
    }
    function getInvestorsNumber(uint id) external view returns (uint){
        return (CampaignsList[id].investorsCount);
    }
}