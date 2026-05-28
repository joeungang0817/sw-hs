interface MemberCardProps {
  name: string;
  role: string;
}
function MemberCard({ name, role }: MemberCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
export default MemberCard;
