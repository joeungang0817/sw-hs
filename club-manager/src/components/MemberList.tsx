import MemberCard from "./MemberCard";
import { Member } from "../mockData";
interface MemberListProps {
  members: Member[];
}
function MemberList({ members }: MemberListProps) {
  if (members.length === 0) {
    return <div className="empty-msg">부원이 없습니다.</div>;
  }
  return (
    <div>
      {members.map((member) => (
        <MemberCard key={member.id} name={member.name} role={member.role} />
      ))}
    </div>
  );
}
export default MemberList;
