import React from "react";
import { Modal } from "reactstrap";


import { AvForm, AvField } from 'availity-reactstrap-validation';

const ModalEditTask = ({ dataModal }) => {
    return (
        (dataModal.no_kamar) ? <div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">AC</label>
                <div className="col-sm-6">
                    <AvField type="select" name="ac" value={`${dataModal.ac}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Cermin</label>
                <div className="col-sm-6">
                    <AvField type="select" name="cermin" value={`${dataModal.cermin}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Gorden</label>
                <div className="col-sm-6">
                    <AvField type="select" name="gorden" value={`${dataModal.gorden}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Jendela</label>
                <div className="col-sm-6">
                    <AvField type="select" name="jendela" value={`${dataModal.jendela}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Keran</label>
                <div className="col-sm-6">
                    <AvField type="select" name="keran" value={`${dataModal.keran}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lantai Kamar</label>
                <div className="col-sm-6">
                    <AvField type="select" name="lantaikamar" value={`${dataModal.lantai_kamar}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lantai Langit Kamar</label>
                <div className="col-sm-6">
                    <AvField type="select" name="lantailangitkamar" value={`${dataModal.lantai_langit_kamar}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lantai Langit Kamar Mandi</label>
                <div className="col-sm-6">
                    <AvField type="select" name="lantailangitkamarmandi" value={`${dataModal.lantai_langit_kamar_mandi}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lantai Toilet</label>
                <div className="col-sm-6">
                    <AvField type="select" name="lantaitoilet" value={`${dataModal.lantai_toilet}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lemari</label>
                <div className="col-sm-6">
                    <AvField type="select" name="lemari" value={`${dataModal.lemari}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Meja</label>
                <div className="col-sm-6">
                    <AvField type="select" name="meja" value={`${dataModal.meja}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Selimut</label>
                <div className="col-sm-6">
                    <AvField type="select" name="selimut" value={`${dataModal.selimut}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Shower</label>
                <div className="col-sm-6">
                    <AvField type="select" name="shower" value={`${dataModal.shower}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Sprei</label>
                <div className="col-sm-6">
                    <AvField type="select" name="sprei" value={`${dataModal.sprei}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Tempat Sampah</label>
                <div className="col-sm-6">
                    <AvField type="select" name="tempatsampah" value={`${dataModal.tempat_sampah}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Tempat Tidur</label>
                <div className="col-sm-6">
                    <AvField type="select" name="tempattidur" value={`${dataModal.tempat_tidur}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Wastafel</label>
                <div className="col-sm-6">
                    <AvField type="select" name="wastafel" value={`${dataModal.wastafel}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">WC</label>
                <div className="col-sm-6">
                    <AvField type="select" name="wc" value={`${dataModal.wc}`}>
                        <option value="true">Sudah</option>
                        <option value="false">Belum</option>
                    </AvField>
                </div>
            </div>
        </div>
            :
            <div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Koridor</label>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Kaca, jendela, dan kusen</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorkancajendelakusen" value={`${dataModal.koridor_kanca_jendela_kusen}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Keset</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorkeset" value={`${dataModal.koridor_keset}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lantai dan sudut lantai</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorlantaisudutlantai" value={`${dataModal.koridor_lantai_sudut_lantai}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Pantry</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorpantry" value={`${dataModal.koridor_pantry}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Peralatan makan dan rak piring</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorperalatanmakanrakpiring" value={`${dataModal.koridor_peralatan_makan_rak_piring}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">pintu</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorpintu" value={`${dataModal.koridor_pintu}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Pintu dan dinding</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorpintudinding" value={`${dataModal.koridor_pintu_dinding}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Tempat sampah</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridortempatsampah" value={`${dataModal.koridor_tempat_sampah}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Wastafel dan chrome fixture</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="koridorwastafelchromefixture" value={`${dataModal.koridor_wastafel_chrome_fixture}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Ruang TV</label>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">AC</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvac" value={`${dataModal.ruang_tv_ac}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Cermin</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvcermin" value={`${dataModal.ruang_tv_cermin}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Dinding</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvdinding" value={`${dataModal.ruang_tv_dinding}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Dispenser</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvdispenser" value={`${dataModal.ruang_tv_dispenser}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Furniture</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvfurniture" value={`${dataModal.ruang_tv_furniture}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Kaca, jendela dan kusen</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvkacajendelakusen" value={`${dataModal.ruang_tv_kaca_jendela_kusen}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lantai</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvlantai" value={`${dataModal.ruang_tv_lantai}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Rak TV</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvraktv" value={`${dataModal.ruang_tv_rak_tv}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Tirai karpet</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="ruangtvtiraikarpet" value={`${dataModal.ruang_tv_tirai_karpet}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Toilet</label>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Lantai dan sudut lantai</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="toiletlantaisudutlantai" value={`${dataModal.toilet_lantai_sudut_lantai}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Pintu dan dinding</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="toiletpintudinding" value={`${dataModal.toilet_pintu_dinding}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Shower area dan curtain</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="toiletshowerareacurtain" value={`${dataModal.toilet_shower_area_curtain}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Tempat sampah</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="toilettempatsampah" value={`${dataModal.toilet_tempat_sampah}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Teras</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="toiletteras" value={`${dataModal.toilet_teras}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Urinoir, selang dan toilet bowl</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="toileturinoirselangtoiletbowl" value={`${dataModal.toilet_urinoir_selang_toilet_bowl}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Wastafel dan chrome fixture</label>
                    <div className="col-sm-6">
                        <AvField type="select" name="toiletwastafelchromefixture" value={`${dataModal.toilet_wastafel_chrome_fixture}`}>
                            <option value="true">Sudah</option>
                            <option value="false">Belum</option>
                        </AvField>
                    </div>
                </div>
            </div>
    )
}

export default ModalEditTask