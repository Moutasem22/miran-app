import React, { useEffect, useState, } from 'react'
// import { connect } from 'react-redux'
import { Table, Input, Button, Tag, Select, Menu, Dropdown, Drawer } from "antd";
import Api from '../../network'

const CountyList = (props) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [countriesList, setCountriesList] = useState(false)


    useEffect(() => {
        Api.get('rest/v2/all').then(res => {
            setCountriesList(res.data);

            // Country Position using - latlng - (Google Map)

            console.log({ res })
        })
    }, [])

    return (
        <div className="app-page-wrapper">
            <div className="app-page-header table__header">
                <h2>Pets</h2>
                <div>
                    <Button size="large" style={{ margin: '0 8px' }} className="" type="primary" onClick={() => setModalVisible(true)}>
                        Add new Country
                    </Button>
                </div>
            </div>
            <div className="site-layout-background section-indent-wrapper" style={{ padding: 24,}}>
                {/* {isModalVisible && <AddPets closeModal={() => setModalVisible(false)} />} */}

                <Table
                    className="table-roles-wrapper app-table-wrapper"
                    columns={[
                        {
                            title: `Country name`,
                            dataIndex: 'name',
                        },
                        {
                            title: `Capital`,
                            dataIndex: 'capital',
                        },
                        {
                            title: `Country flag`,
                            dataIndex: 'flag',
                            render: falg => (
                                <>
                                    <img width="50px" src={falg} />
                                </>
                            )
                        },
                        {
                            title: `Region`,
                            dataIndex: 'region',
                        },
                        {
                            title: `Population`,
                            dataIndex: 'population',
                        },
                    ]}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => { },
                        };
                    }} dataSource={countriesList}
                />
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         currentResource: state.common.currentResource,
//         projectActiveItem: state.common.projectActiveItem
//     }
// }connect(mapStateToProps)(
export default CountyList
