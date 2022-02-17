import {
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonContent,
} from "@ionic/react";

export function AddFamilyMember() {
  return (
    <div>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle color="primary">Adaugă o persoană nouă</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className="flex justify-center pt-4">
        <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
      </div>

      <IonItem>
        <IonLabel position="floating">Numele</IonLabel>
        <IonInput />
      </IonItem>

      <IonItem>
        <IonLabel>Genul</IonLabel>
        <IonSelect value="bărbat">
          <IonSelectOption value="bărbat">bărbat</IonSelectOption>
          <IonSelectOption value="femeie">femeie</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonHeader>
        <IonToolbar>
          <IonTitle color="secondary">Data nașterii</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonItem>
        <IonLabel>Ziua</IonLabel>
        <IonSelect value="01">
          <IonSelectOption value="01">01</IonSelectOption>
          <IonSelectOption value="02">02</IonSelectOption>
          <IonSelectOption value="03">03</IonSelectOption>
          <IonSelectOption value="04">04</IonSelectOption>
          <IonSelectOption value="05">05</IonSelectOption>
          <IonSelectOption value="06">06</IonSelectOption>
          <IonSelectOption value="07">07</IonSelectOption>
          <IonSelectOption value="08">08</IonSelectOption>
          <IonSelectOption value="09">09</IonSelectOption>
          <IonSelectOption value="10">10</IonSelectOption>
          <IonSelectOption value="11">11</IonSelectOption>
          <IonSelectOption value="12">12</IonSelectOption>
          <IonSelectOption value="13">13</IonSelectOption>
          <IonSelectOption value="14">14</IonSelectOption>
          <IonSelectOption value="15">15</IonSelectOption>
          <IonSelectOption value="16">16</IonSelectOption>
          <IonSelectOption value="17">17</IonSelectOption>
          <IonSelectOption value="18">18</IonSelectOption>
          <IonSelectOption value="19">19</IonSelectOption>
          <IonSelectOption value="20">20</IonSelectOption>
          <IonSelectOption value="21">21</IonSelectOption>
          <IonSelectOption value="22">22</IonSelectOption>
          <IonSelectOption value="23">23</IonSelectOption>
          <IonSelectOption value="24">24</IonSelectOption>
          <IonSelectOption value="25">25</IonSelectOption>
          <IonSelectOption value="26">26</IonSelectOption>
          <IonSelectOption value="27">27</IonSelectOption>
          <IonSelectOption value="28">28</IonSelectOption>
          <IonSelectOption value="29">29</IonSelectOption>
          <IonSelectOption value="30">30</IonSelectOption>
          <IonSelectOption value="31">31</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>Luna</IonLabel>
        <IonSelect value="12">
          <IonSelectOption value="01">Ianuarie</IonSelectOption>
          <IonSelectOption value="02">Februarie</IonSelectOption>
          <IonSelectOption value="03">Martie</IonSelectOption>
          <IonSelectOption value="04">Aprilie</IonSelectOption>
          <IonSelectOption value="05">Mai</IonSelectOption>
          <IonSelectOption value="06">Iunie</IonSelectOption>
          <IonSelectOption value="07">Iulie</IonSelectOption>
          <IonSelectOption value="08">August</IonSelectOption>
          <IonSelectOption value="09">Septembrie</IonSelectOption>
          <IonSelectOption value="10">Octombrie</IonSelectOption>
          <IonSelectOption value="11">Noiembrie</IonSelectOption>
          <IonSelectOption value="12">Decembrie</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem lines="none">
        <IonLabel>Anul</IonLabel>
        <IonSelect value="2022">
          <IonSelectOption value="1989">1989</IonSelectOption>
          <IonSelectOption value="1990">1990</IonSelectOption>
          <IonSelectOption value="1991">1991</IonSelectOption>
          <IonSelectOption value="1992">1992</IonSelectOption>
          <IonSelectOption value="1993">1993</IonSelectOption>
          <IonSelectOption value="1994">1994</IonSelectOption>
          <IonSelectOption value="1995">1995</IonSelectOption>
          <IonSelectOption value="1996">1996</IonSelectOption>
          <IonSelectOption value="1997">1997</IonSelectOption>
          <IonSelectOption value="1998">1998</IonSelectOption>
          <IonSelectOption value="1999">1999</IonSelectOption>
          <IonSelectOption value="2000">2000</IonSelectOption>
          <IonSelectOption value="2001">2001</IonSelectOption>
          <IonSelectOption value="2002">2002</IonSelectOption>
          <IonSelectOption value="2003">2003</IonSelectOption>
          <IonSelectOption value="2004">2004</IonSelectOption>
          <IonSelectOption value="2005">2005</IonSelectOption>
          <IonSelectOption value="2006">2006</IonSelectOption>
          <IonSelectOption value="2007">2007</IonSelectOption>
          <IonSelectOption value="2008">2008</IonSelectOption>
          <IonSelectOption value="2009">2009</IonSelectOption>
          <IonSelectOption value="2010">2010</IonSelectOption>
          <IonSelectOption value="2011">2011</IonSelectOption>
          <IonSelectOption value="2012">2012</IonSelectOption>
          <IonSelectOption value="2013">2013</IonSelectOption>
          <IonSelectOption value="2014">2014</IonSelectOption>
          <IonSelectOption value="2015">2015</IonSelectOption>
          <IonSelectOption value="2016">2016</IonSelectOption>
          <IonSelectOption value="2017">2017</IonSelectOption>
          <IonSelectOption value="2018">2018</IonSelectOption>
          <IonSelectOption value="2019">2019</IonSelectOption>
          <IonSelectOption value="2020">2020</IonSelectOption>
          <IonSelectOption value="2021">2021</IonSelectOption>
          <IonSelectOption value="2022">2022</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonButton className="ion-margin-top" type="submit" expand="block">
        Save
      </IonButton>
    </div>
  );
}
