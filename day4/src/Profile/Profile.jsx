import Profileimage from "./Profileimage";
import Profileinfo from "./Profileinfo";

const Profile = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Profileimage src="https://i.namu.wiki/i/WngjPURmV8ifxOGurIHr0J4_PstTWtyPiO5iKWDyv8eoA3cd7QNro1YEcuKoyzENe8jPk3aYJBT7g35Ba5_g0BoJyKK6Dek5NM3oXKVHkVTjyEse-ShFTnrILG9sIfLVF4SFfsLqYPxHh8Dz1sgzSg.webp"></Profileimage>
      <Profileinfo name="장원영" date="2024-08-08"></Profileinfo>
    </div>
  );
};

export default Profile;
